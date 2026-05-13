import {
  pgTable,
  serial,
  integer,
  timestamp,
  real,
  text,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { sessionsTable } from "./sessions";

export const predictionsTable = pgTable("predictions", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id")
    .notNull()
    .references(() => sessionsTable.id, { onDelete: "cascade" }),
  predictedAt: timestamp("predicted_at", { withTimezone: true }).notNull().defaultNow(),
  focusScore: real("focus_score").notNull().default(0),
  fatigueIndex: real("fatigue_index").notNull().default(0),
  distractionRisk: real("distraction_risk").notNull().default(0),
  focusTrend: text("focus_trend").notNull().default("stable"), // rising | stable | declining | critical
  minutesUntilFocusDrop: integer("minutes_until_focus_drop"),
  alertLevel: text("alert_level").notNull().default("none"), // none | low | medium | high | critical
});

export const insertPredictionSchema = createInsertSchema(predictionsTable).omit({
  id: true,
  predictedAt: true,
});
export type InsertPrediction = z.infer<typeof insertPredictionSchema>;
export type Prediction = typeof predictionsTable.$inferSelect;
