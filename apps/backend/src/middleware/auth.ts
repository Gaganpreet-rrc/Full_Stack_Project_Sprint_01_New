import { clerkMiddleware, getAuth } from "@clerk/express";

export const clerkAuth = clerkMiddleware();

export const attachAuth = (req: any, res: any, next: any) => {
  const auth = getAuth(req);
  req.auth = auth;
  next();
};