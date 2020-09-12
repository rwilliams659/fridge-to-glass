import { combineReducers } from 'redux';
import drinksListReducer from './drinksList-reducer';
import alcoholicDrinksReducer from './alcoholicDrinks-reducer';
import nonAlcoholicDrinksReducer from './nonAlcoholicDrinks-reducer';
import errorReducer from './error-reducer';

const rootReducer = combineReducers({
  drinkRecipe: drinkRecipeReducer,
  drinkId: drinkIdReducer,
  drinksList: drinksListReducer,
  nonAlcoholicDrinks: nonAlcoholicDrinksReducer,
  alcoholicDrinks: alcoholicDrinksReducer,
  errorMessage: errorReducer,
});

export default rootReducer;
