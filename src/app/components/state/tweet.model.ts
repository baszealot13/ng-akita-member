import { ID } from "@datorama/akita";

export interface Tweet {
  id: ID;
  username: string;
  text: string;
}