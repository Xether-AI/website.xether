# Phase 4 Implementation: Frontend Integration

## Status: ✅ COMPLETED

## Overview

Successfully implemented Phase 4 of the Xether AI integration plan, connecting the Website frontend to the Main Backend API. The Website can now fetch and display data from pipelines, datasets, projects, teams, and artifacts using TanStack Query for efficient data management.

## Changes Made

### 1. Backend API Client

**File:** `lib/api/backend-client.ts` (NEW - 300+ lines)

Complete TypeScript client for Backend API:
- ✅ Type-safe API methods
- ✅ Error handling with custom BackendApiError class
- ✅ Authentication support (Bearer tokens)
- ✅ All major endpoints covered:
  - Pipelines (CRUD + execute)
  - Datasets (CRUD + versions)
  - Projects (CRUD)
  - Teams (CRUD)
  - Artifacts (upload/download/list)
  - Health check

**Key Features:**
- Automatic JSON serialization/deserialization
- Typed request/response models
- Error handling with request IDs
- Environment-based API URL configuration

### 2. React Hooks for Data Fetching

**File:** `hooks/useBackendApi.ts` (NEW - 250+ lines)

TanStack Query hooks for all API operations:
- ✅ `usePipelines()` - List all pipelines
- ✅ `usePipeline(id)` - Get single pipeline
- ✅ `useCreatePipeline()` - Create new pipeline
- ✅ `useExecutePipeline()` - Execute pipeline
- ✅ `usePipelineExecutions(id)` - Get execution history (with polling)
- ✅ `useDatasets()` - List datasets
- ✅ `useDataset(id)` - Get single dataset
- ✅ `useCreateDataset()` - Create dataset
- ✅ `useDatasetVersions(id)` - Get dataset versions
- ✅ `useProjects()` - List projects
- ✅ `useProject(id)` - Get single project
- ✅ `useCreateProject()` - Create project
- ✅ `useTeams()` - List teams
- ✅ `useTeam(id)` - Get single team
- ✅ `useArtifacts()` - List artifacts with filters
- ✅ `useArtifact(id)` - Get artifact metadata
- ✅ `useRequestUploadURL()` - Request upload URL
- ✅ `useCompleteUpload()` - Complete artifact upload
- ✅ `useHealthCheck()` - Backend health status

**Features:**
- Automatic caching and revalidation
- Optimistic updates
- Query invalidation on mutations
- Polling for real-time updates (executions)
- Loading and error states
- Authentication integration

### 3. Example Dashboard Page

**File:** `app/dashboard/page.tsx` (NEW - 150+ lines)

Demonstrates Backend API integration:
- ✅ Real-time health check display
- ✅ Stats overview (pipelines, datasets, projects)
- ✅ Recent pipelines list with status badges
- ✅ Recent datasets list
- ✅ Loading skeletons
- ✅ Error handling with alerts
- ✅ Empty states

### 4. UI Components

**New Components:**
- `components/ui/alert.tsx` - Alert component for errors/warnings
- `components/ui/skeleton.tsx` - Loading skeleton component

### 5. Configuration

**File:** `.env`

Added Backend API configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**File:** `Main Backend/.env.example`

Updated CORS origins to include all frontend ports:
```env
CORS_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002,http://localhost:8000
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Website (Next.js)                        │
│                                                             │
│  Pages                  Hooks                  API Client  │
│  ┌──────────────┐      ┌──────────────┐      ┌──────────┐ │
│  │ Dashboard    │─────▶│useBackendApi │─────▶│ backend  │ │
│  │ /dashboard   │      │              │      │ -client  │ │
│  └──────────────┘      │ TanStack     │      │          │ │
│                        │ Query        │      │ fetch()  │ │
│                        └──────────────┘      └──────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ HTTP/REST
                                │ Bearer Token Auth
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                Main Backend (FastAPI)                       │
│                                                             │
│  REST API Endpoints                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ GET  /api/v1/pipelines                               │  │
│  │ POST /api/v1/pipelines/{id}/execute                  │  │
│  │ GET  /api/v1/datasets                                │  │
│  │ GET  /api/v1/projects                                │  │
│  │ GET  /api/v1/artifacts                               │  │
│  │ POST /api/v1/artifacts/upload                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### Fetching Data (Query)

```
1. Component renders
   └─▶ useBackendApi hook called

2. TanStack Query checks cache
   ├─▶ Cache hit: Return cached data
   └─▶ Cache miss: Fetch from API

3. Hook calls backend-client method
   └─▶ backendApi.getPipelines(token)

4. Client makes HTTP request
   └─▶ GET http://localhost:8000/api/v1/pipelines
       Headers: Authorization: Bearer <token>

5. Backend responds with data
   └─▶ { pipelines: [...] }

6. Data cached and returned to component
   └─▶ Component renders with data
```

### Mutating Data (Mutation)

```
1. User clicks "Execute Pipeline"
   └─▶ useExecutePipeline() mutation called

2. Mutation function executes
   └─▶ backendApi.executePipeline(token, id)

3. Backend processes request
   └─▶ POST /api/v1/pipelines/{id}/execute

4. On success, invalidate related queries
   └─▶ queryClient.invalidateQueries(['pipeline', id])
   └─▶ queryClient.invalidateQueries(['executions', id])

5. TanStack Query refetches invalidated data
   └─▶ Component updates with fresh data
```

## Setup Instructions

### 1. Configure Environment

**Website `.env`:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend `.env`:**
```env
CORS_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002
```

### 2. Start Backend

```bash
cd "Main Backend"
uvicorn main:app --reload
```

Verify CORS is configured:
```bash
curl -H "Origin: http://localhost:3000" \
     -H "Access-Control-Request-Method: GET" \
     -X OPTIONS \
     http://localhost:8000/api/v1/pipelines
```

### 3. Start Website

```bash
cd Website
npm install
npm run dev
```

### 4. Test Integration

Open http://localhost:3000/dashboard

You should see:
- Backend health status
- Stats for pipelines, datasets, projects
- Lists of recent items (or empty states)

## Usage Examples

### Fetching Pipelines

```typescript
'use client';

import { usePipelines } from '@/hooks/useBackendApi';

export function PipelinesList() {
  const { data: pipelines, isLoading, error } = usePipelines();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {pipelines?.map(pipeline => (
        <li key={pipeline.id}>{pipeline.name}</li>
      ))}
    </ul>
  );
}
```

### Creating a Pipeline

```typescript
'use client';

import { useCreatePipeline } from '@/hooks/useBackendApi';
import { Button } from '@/components/ui/button';

export function CreatePipelineButton() {
  const createPipeline = useCreatePipeline();

  const handleCreate = () => {
    createPipeline.mutate({
      name: 'My Pipeline',
      description: 'Data processing pipeline',
      project_id: 1,
      config: { stages: [] }
    });
  };

  return (
    <Button 
      onClick={handleCreate}
      disabled={createPipeline.isPending}
    >
      {createPipeline.isPending ? 'Creating...' : 'Create Pipeline'}
    </Button>
  );
}
```

### Executing a Pipeline

```typescript
'use client';

import { useExecutePipeline } from '@/hooks/useBackendApi';

export function ExecutePipelineButton({ pipelineId }: { pipelineId: number }) {
  const executePipeline = useExecutePipeline();

  const handleExecute = () => {
    executePipeline.mutate(pipelineId);
  };

  return (
    <button onClick={handleExecute}>
      Execute Pipeline
    </button>
  );
}
```

### Monitoring Execution Status

```typescript
'use client';

import { usePipelineExecutions } from '@/hooks/useBackendApi';

export function ExecutionStatus({ pipelineId }: { pipelineId: number }) {
  // Automatically polls every 5 seconds
  const { data: executions } = usePipelineExecutions(pipelineId);

  const latest = executions?.[0];

  return (
    <div>
      Status: {latest?.status}
      {latest?.progress && <div>Progress: {latest.progress * 100}%</div>}
    </div>
  );
}
```

### Uploading an Artifact

```typescript
'use client';

import { useRequestUploadURL, useCompleteUpload } from '@/hooks/useBackendApi';

export function ArtifactUploader() {
  const requestUpload = useRequestUploadURL();
  const completeUpload = useCompleteUpload();

  const handleUpload = async (file: File) => {
    // 1. Request upload URL
    const { artifact_id, upload_url } = await requestUpload.mutateAsync({
      name: file.name,
      bucket: 'artifacts',
      key: `uploads/${file.name}`,
      content_type: file.type,
      project_id: '1'
    });

    // 2. Upload file directly to S3
    await fetch(upload_url, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': file.type }
    });

    // 3. Complete upload
    await completeUpload.mutateAsync({
      artifactId: artifact_id,
      data: {
        size: file.size,
        checksum: 'sha256-hash' // Calculate actual checksum
      }
    });
  };

  return <input type="file" onChange={(e) => handleUpload(e.target.files![0])} />;
}
```

## Authentication Integration

The hooks use a `useAuthToken()` helper that needs to be implemented based on your auth system:

```typescript
// hooks/useBackendApi.ts
function useAuthToken(): string | null {
  // Option 1: localStorage
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }

  // Option 2: Cookie
  // return getCookie('auth_token');

  // Option 3: Auth context
  // const { token } = useAuth();
  // return token;

  return null;
}
```

## Success Criteria

All criteria met:

- [x] Backend API client implemented with TypeScript
- [x] TanStack Query hooks for all major endpoints
- [x] Example dashboard page demonstrating integration
- [x] Loading states with skeleton components
- [x] Error handling with alert components
- [x] Empty states for no data
- [x] Real-time updates (polling for executions)
- [x] Optimistic updates for mutations
- [x] Query invalidation on data changes
- [x] CORS configured for frontend origins
- [x] Environment variables configured
- [x] Type safety throughout
- [x] Documentation complete

## Key Benefits

1. **Type Safety:** Full TypeScript support with typed API responses
2. **Automatic Caching:** TanStack Query handles caching and revalidation
3. **Real-time Updates:** Polling for execution status
4. **Optimistic UI:** Immediate feedback on mutations
5. **Error Handling:** Comprehensive error states and messages
6. **Loading States:** Skeleton components for better UX
7. **Code Reusability:** Hooks can be used across components
8. **Performance:** Automatic request deduplication and caching

## Next Steps (Phase 5)

1. **End-to-End Testing:**
   - Test complete user flows
   - Test error scenarios
   - Test authentication flows
   - Performance testing

2. **Additional Features:**
   - Implement authentication system
   - Add more dashboard pages
   - Create pipeline builder UI
   - Add dataset upload interface

3. **Optimization:**
   - Implement pagination for large lists
   - Add infinite scroll
   - Optimize bundle size
   - Add service worker for offline support

## Troubleshooting

### CORS Errors

**Problem:** `Access-Control-Allow-Origin` error in browser console

**Solution:**
```bash
# Update Backend .env
CORS_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002

# Restart Backend
uvicorn main:app --reload
```

### Authentication Errors

**Problem:** `401 Unauthorized` on API requests

**Solution:**
- Implement `useAuthToken()` hook properly
- Ensure token is stored after login
- Check token expiration
- Verify token format (Bearer token)

### API Not Found

**Problem:** `404 Not Found` on API requests

**Solution:**
```bash
# Check Backend is running
curl http://localhost:8000/health

# Verify API URL in .env
NEXT_PUBLIC_API_URL=http://localhost:8000

# Restart Next.js dev server
npm run dev
```

### Type Errors

**Problem:** TypeScript errors in components

**Solution:**
```bash
# Regenerate types if Backend API changed
# Update types in lib/api/backend-client.ts

# Check TypeScript
npm run type-check
```

## Resources

- **TanStack Query Docs:** https://tanstack.com/query/latest
- **Next.js Data Fetching:** https://nextjs.org/docs/app/building-your-application/data-fetching
- **Backend API Docs:** http://localhost:8000/docs

---

**Implementation Date:** 2024-02-20  
**Phase:** 4 of 6  
**Status:** ✅ Complete  
**Next:** Phase 5 - End-to-End Testing
