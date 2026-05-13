import {
  pgTable,
  serial,
  integer,
  timestamp,
  real,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { sessionsTable } from "./sessions";

export const behavioralSnapshotsTable = pgTable("behavioral_snapshots", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id")
    .notNull()
    .references(() => sessionsTable.id, { onDelete: "cascade" }),
  capturedAt: timestamp("captured_at", { withTimezone: true }).notNull().defaultNow(),
  typingWpm: real("typing_wpm").notNull().default(0),
  pauseCount: integer("pause_count").notNull().default(0),
  pauseDurationMs: real("pause_duration_ms").notNull().default(0),
  backspaceRate: real("backspace_rate").notNull().default(0),
  keystrokeCount: integer("keystroke_count").notNull().default(0),
  idleTimeMs: real("idle_time_ms").notNull().default(0),
  focusScore: real("focus_score").notNull().default(0),
  fatigueIndex: real("fatigue_index").notNull().default(0),
  distractionRisk: real("distraction_risk").notNull().default(0),
});

export const insertBehavioralSnapshotSchema = createInsertSchema(
  behavioralSnapshotsTable
).omit({ id: true, capturedAt: true });
export type InsertBehavioralSnapshot = z.infer<
  typeof insertBehavioralSnapshotSchema
>;
export type BehavioralSnapshot = typeof behavioralSnapshotsTable.$inferSelect;
