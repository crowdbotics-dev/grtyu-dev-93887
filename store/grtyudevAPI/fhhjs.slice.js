import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fhhj_list = createAsyncThunk(
  "fhhjs/api_v1_fhhj_list",
  async payload => {
    const response = await apiService.api_v1_fhhj_list(payload)
    return response.data
  }
)
export const api_v1_fhhj_create = createAsyncThunk(
  "fhhjs/api_v1_fhhj_create",
  async payload => {
    const response = await apiService.api_v1_fhhj_create(payload)
    return response.data
  }
)
export const api_v1_fhhj_retrieve = createAsyncThunk(
  "fhhjs/api_v1_fhhj_retrieve",
  async payload => {
    const response = await apiService.api_v1_fhhj_retrieve(payload)
    return response.data
  }
)
export const api_v1_fhhj_update = createAsyncThunk(
  "fhhjs/api_v1_fhhj_update",
  async payload => {
    const response = await apiService.api_v1_fhhj_update(payload)
    return response.data
  }
)
export const api_v1_fhhj_partial_update = createAsyncThunk(
  "fhhjs/api_v1_fhhj_partial_update",
  async payload => {
    const response = await apiService.api_v1_fhhj_partial_update(payload)
    return response.data
  }
)
export const api_v1_fhhj_destroy = createAsyncThunk(
  "fhhjs/api_v1_fhhj_destroy",
  async payload => {
    const response = await apiService.api_v1_fhhj_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fhhjsSlice = createSlice({
  name: "fhhjs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_fhhj_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fhhj_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fhhj_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_fhhj_list,
  api_v1_fhhj_create,
  api_v1_fhhj_retrieve,
  api_v1_fhhj_update,
  api_v1_fhhj_partial_update,
  api_v1_fhhj_destroy,
  slice: fhhjsSlice
}
