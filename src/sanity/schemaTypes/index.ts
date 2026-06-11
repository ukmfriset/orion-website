import { type SchemaTypeDefinition } from "sanity";

import siteSettings from "./siteSettings";
import events from "./events";
import stats from "./stats";
import timeline from "./timeline";
import speaker from "./speaker";
import gallery from "./gallery";
import winners from "./winners";
import sponsors from "./sponsors";
import essay from "./essay";
import webinar from "./webinar";
import rpk from "./rpk";

export const schemaTypes = [
  siteSettings,
  events,
  stats,
  timeline,
  speaker,
  gallery,
  winners,
  sponsors,
  essay,
  webinar,
  rpk,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    events,
    stats,
    timeline,
    speaker,
    gallery,
    winners,
    sponsors,
    essay,
    webinar,
    rpk,
  ],
};