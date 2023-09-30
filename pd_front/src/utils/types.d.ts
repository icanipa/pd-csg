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
    last_incident_timestamp: string | null;
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
  
  export interface Incidents {
    assignments: (Assignments)[] | [];
    basic_alert_grouping?: null;
    created_at: string;
    description: string;
    html_url: string;
    id: string;
    last_status_change_at?: string;
    priority?: {} | null;
    resolved_at?: null;
    responder_requests?: (null)[] | null;
    self?: string;
    service: Assignee;
    status: string;
    summary: string;
    title: string;
    type: string;
    updated_at: string;
    urgency: string;
  }
  
  export interface Assignments {
    assignee: Assignee;
    at: string;
  }

export interface Assignee{
    html_url: string;
    id: string;
    self: string;
    summary: string;
    type: string;
}
  
export interface IncidentsData extends Incidents {
    assigned: string
}

export interface UpdateBody {
  id: string;
  status: string;
  title: string;
  type: string;
  urgency: string;
}

export interface defaultPostFields {
  type: string,
  title: string,
  service: {
      id?: string,
      type: string
  },
  urgency: string
}

export interface BodyPost {
  incident: defaultPostFields
}