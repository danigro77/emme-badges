import { isEmpty } from "ramda";

export const dataAvailable = (data) => data && !isEmpty(data);