import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { BehavioralSnapshot, CognitiveProfile, DashboardSummary, GetProductivityTrendParams, HealthStatus, HourlyFocusPoint, Insight, Intervention, ListInterventionsParams, ListPredictionsParams, ListSessionsParams, Prediction, ProfileUpdate, Session, SessionInput, SessionUpdate, SnapshotInput, SnapshotResult, TrendPoint } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all sessions (most recent first)
 */
export declare const getListSessionsUrl: (params?: ListSessionsParams) => string;
export declare const listSessions: (params?: ListSessionsParams, options?: RequestInit) => Promise<Session[]>;
export declare const getListSessionsQueryKey: (params?: ListSessionsParams) => readonly ["/api/sessions", ...ListSessionsParams[]];
export declare const getListSessionsQueryOptions: <TData = Awaited<ReturnType<typeof listSessions>>, TError = ErrorType<unknown>>(params?: ListSessionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof listSessions>>>;
export type ListSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List all sessions (most recent first)
 */
export declare function useListSessions<TData = Awaited<ReturnType<typeof listSessions>>, TError = ErrorType<unknown>>(params?: ListSessionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Start a new focus session
 */
export declare const getCreateSessionUrl: () => string;
export declare const createSession: (sessionInput: SessionInput, options?: RequestInit) => Promise<Session>;
export declare const getCreateSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<SessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<SessionInput>;
}, TContext>;
export type CreateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof createSession>>>;
export type CreateSessionMutationBody = BodyType<SessionInput>;
export type CreateSessionMutationError = ErrorType<unknown>;
/**
 * @summary Start a new focus session
 */
export declare const useCreateSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSession>>, TError, {
        data: BodyType<SessionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSession>>, TError, {
    data: BodyType<SessionInput>;
}, TContext>;
/**
 * @summary Get the currently active session (if any)
 */
export declare const getGetActiveSessionUrl: () => string;
export declare const getActiveSession: (options?: RequestInit) => Promise<Session>;
export declare const getGetActiveSessionQueryKey: () => readonly ["/api/sessions/active"];
export declare const getGetActiveSessionQueryOptions: <TData = Awaited<ReturnType<typeof getActiveSession>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActiveSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getActiveSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetActiveSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getActiveSession>>>;
export type GetActiveSessionQueryError = ErrorType<void>;
/**
 * @summary Get the currently active session (if any)
 */
export declare function useGetActiveSession<TData = Awaited<ReturnType<typeof getActiveSession>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActiveSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a session by ID
 */
export declare const getGetSessionUrl: (id: number) => string;
export declare const getSession: (id: number, options?: RequestInit) => Promise<Session>;
export declare const getGetSessionQueryKey: (id: number) => readonly [`/api/sessions/${number}`];
export declare const getGetSessionQueryOptions: <TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getSession>>>;
export type GetSessionQueryError = ErrorType<void>;
/**
 * @summary Get a session by ID
 */
export declare function useGetSession<TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a session (e.g., stop it)
 */
export declare const getUpdateSessionUrl: (id: number) => string;
export declare const updateSession: (id: number, sessionUpdate: SessionUpdate, options?: RequestInit) => Promise<Session>;
export declare const getUpdateSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
        id: number;
        data: BodyType<SessionUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
    id: number;
    data: BodyType<SessionUpdate>;
}, TContext>;
export type UpdateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof updateSession>>>;
export type UpdateSessionMutationBody = BodyType<SessionUpdate>;
export type UpdateSessionMutationError = ErrorType<unknown>;
/**
 * @summary Update a session (e.g., stop it)
 */
export declare const useUpdateSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSession>>, TError, {
        id: number;
        data: BodyType<SessionUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSession>>, TError, {
    id: number;
    data: BodyType<SessionUpdate>;
}, TContext>;
/**
 * @summary Get behavioral snapshots for a session
 */
export declare const getListSessionSnapshotsUrl: (id: number) => string;
export declare const listSessionSnapshots: (id: number, options?: RequestInit) => Promise<BehavioralSnapshot[]>;
export declare const getListSessionSnapshotsQueryKey: (id: number) => readonly [`/api/sessions/${number}/snapshots`];
export declare const getListSessionSnapshotsQueryOptions: <TData = Awaited<ReturnType<typeof listSessionSnapshots>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessionSnapshots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSessionSnapshots>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSessionSnapshotsQueryResult = NonNullable<Awaited<ReturnType<typeof listSessionSnapshots>>>;
export type ListSessionSnapshotsQueryError = ErrorType<unknown>;
/**
 * @summary Get behavioral snapshots for a session
 */
export declare function useListSessionSnapshots<TData = Awaited<ReturnType<typeof listSessionSnapshots>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSessionSnapshots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a behavioral snapshot (typing metrics, pauses, etc.)
 */
export declare const getSubmitSnapshotUrl: () => string;
export declare const submitSnapshot: (snapshotInput: SnapshotInput, options?: RequestInit) => Promise<SnapshotResult>;
export declare const getSubmitSnapshotMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitSnapshot>>, TError, {
        data: BodyType<SnapshotInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitSnapshot>>, TError, {
    data: BodyType<SnapshotInput>;
}, TContext>;
export type SubmitSnapshotMutationResult = NonNullable<Awaited<ReturnType<typeof submitSnapshot>>>;
export type SubmitSnapshotMutationBody = BodyType<SnapshotInput>;
export type SubmitSnapshotMutationError = ErrorType<unknown>;
/**
 * @summary Submit a behavioral snapshot (typing metrics, pauses, etc.)
 */
export declare const useSubmitSnapshot: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitSnapshot>>, TError, {
        data: BodyType<SnapshotInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitSnapshot>>, TError, {
    data: BodyType<SnapshotInput>;
}, TContext>;
/**
 * @summary Get the latest cognitive state prediction
 */
export declare const getGetCurrentPredictionUrl: () => string;
export declare const getCurrentPrediction: (options?: RequestInit) => Promise<Prediction>;
export declare const getGetCurrentPredictionQueryKey: () => readonly ["/api/predictions/current"];
export declare const getGetCurrentPredictionQueryOptions: <TData = Awaited<ReturnType<typeof getCurrentPrediction>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentPrediction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCurrentPrediction>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCurrentPredictionQueryResult = NonNullable<Awaited<ReturnType<typeof getCurrentPrediction>>>;
export type GetCurrentPredictionQueryError = ErrorType<void>;
/**
 * @summary Get the latest cognitive state prediction
 */
export declare function useGetCurrentPrediction<TData = Awaited<ReturnType<typeof getCurrentPrediction>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentPrediction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get prediction history for the active or recent session
 */
export declare const getListPredictionsUrl: (params?: ListPredictionsParams) => string;
export declare const listPredictions: (params?: ListPredictionsParams, options?: RequestInit) => Promise<Prediction[]>;
export declare const getListPredictionsQueryKey: (params?: ListPredictionsParams) => readonly ["/api/predictions/history", ...ListPredictionsParams[]];
export declare const getListPredictionsQueryOptions: <TData = Awaited<ReturnType<typeof listPredictions>>, TError = ErrorType<unknown>>(params?: ListPredictionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPredictions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPredictions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPredictionsQueryResult = NonNullable<Awaited<ReturnType<typeof listPredictions>>>;
export type ListPredictionsQueryError = ErrorType<unknown>;
/**
 * @summary Get prediction history for the active or recent session
 */
export declare function useListPredictions<TData = Awaited<ReturnType<typeof listPredictions>>, TError = ErrorType<unknown>>(params?: ListPredictionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPredictions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get list of recent interventions
 */
export declare const getListInterventionsUrl: (params?: ListInterventionsParams) => string;
export declare const listInterventions: (params?: ListInterventionsParams, options?: RequestInit) => Promise<Intervention[]>;
export declare const getListInterventionsQueryKey: (params?: ListInterventionsParams) => readonly ["/api/interventions", ...ListInterventionsParams[]];
export declare const getListInterventionsQueryOptions: <TData = Awaited<ReturnType<typeof listInterventions>>, TError = ErrorType<unknown>>(params?: ListInterventionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInterventions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listInterventions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListInterventionsQueryResult = NonNullable<Awaited<ReturnType<typeof listInterventions>>>;
export type ListInterventionsQueryError = ErrorType<unknown>;
/**
 * @summary Get list of recent interventions
 */
export declare function useListInterventions<TData = Awaited<ReturnType<typeof listInterventions>>, TError = ErrorType<unknown>>(params?: ListInterventionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInterventions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Acknowledge / dismiss an intervention
 */
export declare const getAcknowledgeInterventionUrl: (id: number) => string;
export declare const acknowledgeIntervention: (id: number, options?: RequestInit) => Promise<Intervention>;
export declare const getAcknowledgeInterventionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof acknowledgeIntervention>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof acknowledgeIntervention>>, TError, {
    id: number;
}, TContext>;
export type AcknowledgeInterventionMutationResult = NonNullable<Awaited<ReturnType<typeof acknowledgeIntervention>>>;
export type AcknowledgeInterventionMutationError = ErrorType<unknown>;
/**
 * @summary Acknowledge / dismiss an intervention
 */
export declare const useAcknowledgeIntervention: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof acknowledgeIntervention>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof acknowledgeIntervention>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get AI-generated cognitive insights
 */
export declare const getListInsightsUrl: () => string;
export declare const listInsights: (options?: RequestInit) => Promise<Insight[]>;
export declare const getListInsightsQueryKey: () => readonly ["/api/insights"];
export declare const getListInsightsQueryOptions: <TData = Awaited<ReturnType<typeof listInsights>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInsights>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listInsights>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListInsightsQueryResult = NonNullable<Awaited<ReturnType<typeof listInsights>>>;
export type ListInsightsQueryError = ErrorType<unknown>;
/**
 * @summary Get AI-generated cognitive insights
 */
export declare function useListInsights<TData = Awaited<ReturnType<typeof listInsights>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInsights>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get the user's cognitive profile
 */
export declare const getGetProfileUrl: () => string;
export declare const getProfile: (options?: RequestInit) => Promise<CognitiveProfile>;
export declare const getGetProfileQueryKey: () => readonly ["/api/profile"];
export declare const getGetProfileQueryOptions: <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>;
export type GetProfileQueryError = ErrorType<unknown>;
/**
 * @summary Get the user's cognitive profile
 */
export declare function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update user cognitive profile settings
 */
export declare const getUpdateProfileUrl: () => string;
export declare const updateProfile: (profileUpdate: ProfileUpdate, options?: RequestInit) => Promise<CognitiveProfile>;
export declare const getUpdateProfileMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProfile>>, TError, {
        data: BodyType<ProfileUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateProfile>>, TError, {
    data: BodyType<ProfileUpdate>;
}, TContext>;
export type UpdateProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateProfile>>>;
export type UpdateProfileMutationBody = BodyType<ProfileUpdate>;
export type UpdateProfileMutationError = ErrorType<unknown>;
/**
 * @summary Update user cognitive profile settings
 */
export declare const useUpdateProfile: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProfile>>, TError, {
        data: BodyType<ProfileUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateProfile>>, TError, {
    data: BodyType<ProfileUpdate>;
}, TContext>;
/**
 * @summary Get dashboard summary (total sessions, avg focus, top hours, etc.)
 */
export declare const getGetDashboardSummaryUrl: () => string;
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/analytics/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary (total sessions, avg focus, top hours, etc.)
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get productivity trend over recent sessions
 */
export declare const getGetProductivityTrendUrl: (params?: GetProductivityTrendParams) => string;
export declare const getProductivityTrend: (params?: GetProductivityTrendParams, options?: RequestInit) => Promise<TrendPoint[]>;
export declare const getGetProductivityTrendQueryKey: (params?: GetProductivityTrendParams) => readonly ["/api/analytics/productivity-trend", ...GetProductivityTrendParams[]];
export declare const getGetProductivityTrendQueryOptions: <TData = Awaited<ReturnType<typeof getProductivityTrend>>, TError = ErrorType<unknown>>(params?: GetProductivityTrendParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProductivityTrend>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProductivityTrend>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductivityTrendQueryResult = NonNullable<Awaited<ReturnType<typeof getProductivityTrend>>>;
export type GetProductivityTrendQueryError = ErrorType<unknown>;
/**
 * @summary Get productivity trend over recent sessions
 */
export declare function useGetProductivityTrend<TData = Awaited<ReturnType<typeof getProductivityTrend>>, TError = ErrorType<unknown>>(params?: GetProductivityTrendParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProductivityTrend>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get peak focus hours breakdown
 */
export declare const getGetPeakHoursUrl: () => string;
export declare const getPeakHours: (options?: RequestInit) => Promise<HourlyFocusPoint[]>;
export declare const getGetPeakHoursQueryKey: () => readonly ["/api/analytics/peak-hours"];
export declare const getGetPeakHoursQueryOptions: <TData = Awaited<ReturnType<typeof getPeakHours>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPeakHours>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPeakHours>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPeakHoursQueryResult = NonNullable<Awaited<ReturnType<typeof getPeakHours>>>;
export type GetPeakHoursQueryError = ErrorType<unknown>;
/**
 * @summary Get peak focus hours breakdown
 */
export declare function useGetPeakHours<TData = Awaited<ReturnType<typeof getPeakHours>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPeakHours>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map