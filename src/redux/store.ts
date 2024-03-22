import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { useSelector, TypedUseSelectorHook} from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
	key: "rootPersist",
	storage
}

const rootReducer = combineReducers({cartSlice})
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
	{
		reducer: reduxPersistedReducer
	}
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector