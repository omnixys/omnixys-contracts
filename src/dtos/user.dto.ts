
export interface UserDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  invitationId?: string;
}

export interface UserUpdateDTO {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface UserActionDTO {
  userId: string;
}

export interface AddUserIdDTO{}

export interface CreateUserProviderDTO {
  userId: string;
  email?: string;
  username?: string;
}