import type { unprocessedModels } from "../index";

type ModelId = (typeof unprocessedModels)[number]["sys"]["id"];
