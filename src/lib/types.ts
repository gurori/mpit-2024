export interface Vacancy {
    id:          string;
    title:       string;
    description: string;
    salary:      number;
    users:       User[];
    userIds:     string[];
    employerId:  string;
}

export interface User {
    id:        string;
    email:     string;
    firstName: string;
    role:      string;
    vacancies:  Vacancy[];
    vacancyIds: string[]
}