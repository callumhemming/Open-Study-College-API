import { CourseData, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";

export async function getAllCourses(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM courses
        `);

  //Check is response is valid



  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function getCourseByID(courseCode: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
            SELECT * FROM courses
            WHERE courseCode = $1
            
        `,
    [courseCode]
  );

  //Check is response is valid

    //get QandAs

    const qAndAs = await db.query(`
    SELECT * FROM qandas
    WHERE courseCode = $1
  `,[courseCode]);

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  apiResponse.payload[0].qandas = qAndAs.rows

  return apiResponse;
}

export async function createNewCourse(body: CourseData): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { courseCode, name, tag, atAGlance, overview, extraInfo, examDetails } =
    body;

  const response = await db.query(
    `
    INSERT INTO courses(courseCode, name, tag, atAGlance, overview, extraInfo, examDetails)
    VALUES ($1, $2, $3, $4, $5, $6,$7)
   
    `,
    [courseCode, name, tag, atAGlance, overview, extraInfo, examDetails]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceCourseByID(
  courseCode: string,
  updateColumnArray: UpdateColumn[]
): Promise<APIres> {


  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  async function updateEachValue(columnSelection: UpdateColumn) {
    const { column, newData } = columnSelection;
    console.log(column, newData, courseCode)
    return await db.query(
      `
      UPDATE courses 
      SET ${column} = $1 
      WHERE coursecode = $2
              
          `,
      [newData, courseCode]
    );

  }

  const response = await Promise.all(
    updateColumnArray.map(async columnSelection => {
      return await updateEachValue(columnSelection);
    })
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response;

  return apiResponse;
}

export async function deleteCourseByID(courseCode: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
    DELETE FROM courses
    WHERE courseCode = $1
    `,
    [courseCode]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}
