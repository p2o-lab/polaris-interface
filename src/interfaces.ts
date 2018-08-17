import {RecipeOptions} from "./options";

export interface RecipeManagerInterface {
    recipe_status: string;
    service_states: object[];
    current_step: any;
    options: RecipeOptions;
}