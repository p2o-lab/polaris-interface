import {RecipeOptions} from "./RecipeOptions";

export interface RecipeManagerInterface {
    recipe_status: string;
    service_states: object[];
    current_step: any;
    options: RecipeOptions;
}