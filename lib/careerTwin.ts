import { careerTwinState } from "@/data/careerTwinState";

export function getCareerTwin() {
  return careerTwinState;
}

export function getMission() {
  return careerTwinState.dashboard.mission;
}

export function getJobs() {
  return careerTwinState.jobs;
}

export function getApplications() {
  return careerTwinState.applications;
}

export function getAIStatus() {
  return careerTwinState.ai;
}

export function getProfile() {
  return careerTwinState.profile;
}