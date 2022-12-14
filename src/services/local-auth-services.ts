const browser = true;
import type { IUser } from "./model";

export default class LocalAuthServices {
  // setter......................................................

  public static saveUser = (user: IUser) => {
    localStorage.setItem("access_token", user.access_token);
    localStorage.setItem("name", user.name);
    localStorage.setItem("first_name", user.first_name);
    localStorage.setItem("last_name", user.last_name);
    localStorage.setItem("role", user.role.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("image", user.image);
    localStorage.setItem("user_id", user.user_id);
    localStorage.setItem("refresh_token", user.refresh_token);
    localStorage.setItem("token_expires_at", user.token_expires_at.toString());
    localStorage.setItem(
      "refresh_token_expires_at",
      user.refresh_token_expires_at.toString()
    );
  };

  public static setToken = (token: string) => {
    localStorage.setItem("access_token", token);
  };

  public static setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refresh_token", refreshToken);
  };

  public static setTokenExpiresAt = (tokenExpiresAt: number) => {
    localStorage.setItem("token_expires_at", tokenExpiresAt.toString());
  };

  public static setRefreshTokenExpiresAt = (refreshTokenExpiresAt: number) => {
    localStorage.setItem(
      "refresh_token_expires_at",
      refreshTokenExpiresAt.toString()
    );
  };

  public static setLoginMethod = (loginMethod: string) => {
    localStorage.setItem("loginMethod", loginMethod);
  };

  public static setUserId = (userId: string) => {
    localStorage.setItem("userId", userId);
  };

  public static setUserEmail = (userEmail: string) => {
    localStorage.setItem("userEmail", userEmail);
  };

  public static setUserRole = (role: any) => {
    localStorage.setItem("userRole", JSON.stringify(role));
  };

  // getter......................................................

  public static getUser = () => {
    const access_token = localStorage.getItem("access_token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const image = localStorage.getItem("image");
    const role = localStorage.getItem("role");
    const first_name = localStorage.getItem("first_name");
    const last_name = localStorage.getItem("last_name");
    const user_id = localStorage.getItem("user_id");
    return {
      access_token,
      email,
      name,
      image,
      role,
      first_name,
      user_id,
      last_name,
    };
  };

  public static getToken = (): string | null => {
    return localStorage.getItem("access_token");
  };

  public static getRefreshToken = (): string | null => {
    return localStorage.getItem("refresh_token");
  };

  public static getTokenExpiresAt = (): number | null => {
    return Number(localStorage.getItem("token_expires_at"));
  };

  public static getRefreshTokenExpiresAt = (): number | null => {
    return Number(localStorage.getItem("refresh_token_expires_at"));
  };

  public static getLoginMethod = (): string | null => {
    return localStorage.getItem("loginMethod");
  };

  public static getUserId = (): string | null => {
    if (browser && localStorage) return localStorage.getItem("user_id");
    return null;
  };

  public static getUserEmail = (): string | null => {
    return localStorage.getItem("email");
  };

  public static getUserRole = (): any | null => {
    return localStorage.getItem("role");
  };
}
