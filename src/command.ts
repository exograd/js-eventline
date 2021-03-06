// Copyright (c) 2021-2022 Exograd SAS.
//
// Permission to use, copy, modify, and/or distribute this software for
// any purpose with or without fee is hereby granted, provided that the
// above copyright notice and this permission notice appear in all
// copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
// WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
// AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
// DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
// PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
// TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

import type { Id } from "@ev";
import type { Client } from "@ev/client";

export interface ExecuteCommandRequest {
  id: Id;
  parameters: Record<string, string | number | boolean>;
}

export interface ExecuteCommandResponse {
  pipeline_ids: Id[];
}

export async function executeCommand(
  client: Client,
  request: ExecuteCommandRequest
): Promise<ExecuteCommandRequest> {
  const data = JSON.stringify(request.parameters);
  const url = "/v0/commands/id/" + request.id + "/execute";
  return client("POST", url, data);
}
