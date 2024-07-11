const errorHandler =(statuscode,ermessage)=>{
    const error=new Error()
    error.message=ermessage;
    error.statuscode=statuscode;
    return error
}
export default errorHandler