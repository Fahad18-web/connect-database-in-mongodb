class ApiResponse {
    constructor(statuscode,message,data = 'Success'){
          this.statuscode = statuscode
          this.message = message
          this.success = statuscode < 400
    }
}