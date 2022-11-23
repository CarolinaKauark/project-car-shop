import { NextFunction, Request, Response } from 'express';

// class ErrorHandler {
//   public static handle: ErrorRequestHandler(error, _req, res, next) {
//     const { status = 500, message } = error;
//     res.status(status).json({ message });
//     next();
//   }
// }

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { message } = error;
    res.status(500).json({ message });
    next();
  }
}

export default ErrorHandler;