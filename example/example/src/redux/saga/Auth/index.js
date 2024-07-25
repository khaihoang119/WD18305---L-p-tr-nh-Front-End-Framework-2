import {all, select, takeLatest, put} from 'redux-saga/effects';
import { Auth } from "../../types";
import { getProfile } from "../../../services/Auth";