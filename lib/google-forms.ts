export const googleFormOtherOption = "__other_option__";

export interface SelectOption {
  value: string;
  label: string;
}

export interface GoogleFormConfig<FieldName extends string> {
  formResponseUrl: string;
  entryIds: Record<FieldName, string>;
  // Set when the form has "Collect email addresses" on; Google then rejects responses without it.
  respondentEmailField: FieldName | null;
}

// Google Forms does not send CORS headers, so the response is opaque and only network failures can be detected.
export async function submitGoogleForm<FieldName extends string>(
  config: GoogleFormConfig<FieldName>,
  values: Record<FieldName, string>
): Promise<void> {
  const body = new URLSearchParams();
  (Object.keys(config.entryIds) as FieldName[]).forEach((field) => {
    body.append(config.entryIds[field], values[field]);
  });
  if (config.respondentEmailField !== null) {
    body.append("emailAddress", values[config.respondentEmailField]);
  }

  await fetch(config.formResponseUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
}
