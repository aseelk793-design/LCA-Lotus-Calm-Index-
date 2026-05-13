import {
  pgTable,
  serial,
  text,
  timestamp,
  real,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const sessionsTable = pgTable("sessions", {
  id: serial("id").primaryKey(),
  label: text("label"),
  status: text("status").notNull().default("active"), // active | completed | paused
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  endedAt: timestamp("ended_at", { withTimezone: true }),
  focusScore: real("focus_score").notNull().default(0),
  fatigueIndex: real("fatigue_index").notNull().default(0),
  distractionRisk: real("distraction_risk").notNull().default(0),
  typingWpm: real("typing_wpm"),
  pauseRate: real("pause_rate"),
  backspaceRate: real("backspace_rate"),
  snapshotCount: integer("snapshot_count").notNull().default(0),
});

export const insertSessionSchema = createInsertSchema(sessionsTable).omit({
  id: true,
  startedAt: true,
  snapshotCount: true,
});
export type InsertSession = z.infer<typeof insertSessionSchema>;
export type Session = typeof sessionsTable.$inferSelect;
