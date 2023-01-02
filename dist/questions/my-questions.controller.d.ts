import { GetQuestionDto } from "./dto/get-questions.dto";
import { CreateQuestionDto, UpdateQuestionDto } from "./dto/question.dto";
import { MyQuestionsService } from "./my-questions.service";
export declare class MyQuestionsController {
    private myQuestionService;
    constructor(myQuestionService: MyQuestionsService);
    findAll(query: GetQuestionDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: import("./entities/question.entity").Question[];
    };
    find(id: string): import("./entities/question.entity").Question;
    create(createQuestionDto: CreateQuestionDto): import("./entities/question.entity").Question;
    update(id: string, updateQuestionDto: UpdateQuestionDto): import("./entities/question.entity").Question;
    delete(id: string): import("./entities/question.entity").Question;
}
