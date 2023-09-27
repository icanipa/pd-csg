export interface APIResults {
    results: Services[]
  }

export interface Services {
    acknowledgement_timeout?: null;
    addons?: (null)[] | null;
    alert_creation: string;
    alert_grouping?: string | null;
    alert_grouping_parameters: AlertGroupingParameters;
    alert_grouping_timeout?: null;
    auto_resolve_timeout?: null;
    created_at: string;
    description: string;
    escalation_policy: EscalationPolicy;
    html_url: string;
    id: string;
    incident_urgency_rule: IncidentUrgencyRule;
    integrations?: (null)[] | null;
    last_incident_timestamp?: string | null;
    name: string;
    response_play?: null;
    scheduled_actions?: (null)[] | null;
    self: string;
    status: string;
    summary: string;
    support_hours?: null;
    teams?: (null)[] | null;
    type: string;
    updated_at: string;
  }
  export interface AlertGroupingParameters {
    config?: Config | null;
    type?: string | null;
  }
  export interface Config {
    recommended_time_window: number;
    time_window: number;
  }
  export interface EscalationPolicy {
    html_url: string;
    id: string;
    self: string;
    summary: string;
    type: string;
  }
  export interface IncidentUrgencyRule {
    type: string;
    urgency: string;
  }
  