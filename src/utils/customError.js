class CustomError extends Error{
    constructor(message, statusCode) {
        super(message); // Call the parent class constructor with the error messagae
        this.statusCode = statusCode; // Store the HTTP status codee
    }
}

export default CustomError;