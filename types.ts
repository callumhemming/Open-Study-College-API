


export interface APIres {
    success:boolean;
    payload:any[];
}


export interface CourseData{
    courseCode:string;
    name:string;
    tag:string;
    atAGlance:string[];
    overview:string[];
    extraInfo: string[];
    examDetails: string; 
}
/*
    CREATE TABLE IF NOT EXISTS courses(
        courseID SERIAL PRIMARY KEY,
        courseCode TEXT,
        name TEXT,
        tag TEXT,
        atAGlance text[],
        overview text[],
        extraInfo text[],
        examDetails JSON
    )
    RETURNING *
*/

export interface QandA{
    courseId:string;
    question:string;
    answer:string;
}


 /**
  * @param column
  * @param newData
  */
export interface UpdateColumn {
    column:string;
    newData:string;
}