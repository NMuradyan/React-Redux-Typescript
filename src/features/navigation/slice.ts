import React, { FC } from 'react'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Courses from '../screens/Courses'
import Friends from '../screens/Friends'
import Market from '../screens/Market'
import { start } from 'repl';


export enum Route {
    Courses = 'courses',
    Friends = 'friends',
    Market = 'market',
}

export interface NavigationState {
    active: Route;
}

const initialState: NavigationState = {
    active: Route.Courses,
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        push: (state, action: PayloadAction<Route>) => {
            state.active = action.payload
        }
    }
})

export const { push } = navigationSlice.actions

export default navigationSlice.reducer;
