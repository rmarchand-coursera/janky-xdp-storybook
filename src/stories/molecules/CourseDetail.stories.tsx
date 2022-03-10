import CourseDetail from './CourseDetail';
import { courseDetails } from "../mockData";

export default {
    title: 'molecules/CourseDetail',
    component: CourseDetail
};

export const base = () => <CourseDetail {...courseDetails[0]} />