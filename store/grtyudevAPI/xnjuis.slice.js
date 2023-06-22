import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xnjui_list = createAsyncThunk(
  "xnjuis/api_v1_xnjui_list",
  async payload => {
    const response = await apiService.api_v1_xnjui_list(payload)
    return response.data
  }
)
export const api_v1_xnjui_create = createAsyncThunk(
  "xnjuis/api_v1_xnjui_create",
  async payload => {
    const response = await apiService.api_v1_xnjui_create(payload)
    return response.data
  }
)
export const api_v1_xnjui_retrieve = createAsyncThunk(
  "xnjuis/api_v1_xnjui_retrieve",
  async payload => {
    const response = await apiService.api_v1_xnjui_retrieve(payload)
    return response.data
  }
)
export const api_v1_xnjui_update = createAsyncThunk(
  "xnjuis/api_v1_xnjui_update",
  async payload => {
    const response = await apiService.api_v1_xnjui_update(payload)
    return response.data
  }
)
export const api_v1_xnjui_partial_update = createAsyncThunk(
  "xnjuis/api_v1_xnjui_partial_update",
  async payload => {
    const response = await apiService.api_v1_xnjui_partial_update(payload)
    return response.data
  }
)
export const api_v1_xnjui_destroy = createAsyncThunk(
  "xnjuis/api_v1_xnjui_destroy",
  async payload => {
    const response = await apiService.api_v1_xnjui_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xnjuisSlice = createSlice({
  name: "xnjuis",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_xnjui_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xnjui_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xnjui_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_xnjui_list,
  api_v1_xnjui_create,
  api_v1_xnjui_retrieve,
  api_v1_xnjui_update,
  api_v1_xnjui_partial_update,
  api_v1_xnjui_destroy,
  slice: xnjuisSlice
}
