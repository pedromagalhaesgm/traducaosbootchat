import {
  OPERATOR_TYPES_1,
  OPERATOR_TYPES_2,
  OPERATOR_TYPES_3,
  OPERATOR_TYPES_6,
} from './operators';

export const AUTOMATIONS = {
  message_created: {
    conditions: [
      {
        "key": "message_type",
        "name": "Tipo de Mensagem",
        "attributeI18nKey": "MESSAGE_TYPE",
        "inputType": "search_select",
        "filterOperators": OPERATOR_TYPES_1
      },
      {
        "key": "content",
        "name": "Conteúdo da Mensagem",
        "attributeI18nKey": "MESSAGE_CONTAINS",
        "inputType": "plain_text",
        "filterOperators": OPERATOR_TYPES_2
      },
      {
        "key": "email",
        "name": "Email",
        "attributeI18nKey": "EMAIL",
        "inputType": "plain_text",
        "filterOperators": OPERATOR_TYPES_2
      },
      {
        "key": "inbox_id",
        "name": "Caixa de Entrada",
        "attributeI18nKey": "INBOX",
        "inputType": "multi_select",
        "filterOperators": OPERATOR_TYPES_1
      },
      {
        "key": "conversation_language",
        "name": "Idioma da Conversa",
        "attributeI18nKey": "CONVERSATION_LANGUAGE",
        "inputType": "multi_select",
        "filterOperators": OPERATOR_TYPES_1
      },
      {
        "key": "phone_number",
        "name": "Número de Telefone",
        "attributeI18nKey": "PHONE_NUMBER",
        "inputType": "plain_text",
        "filterOperators": OPERATOR_TYPES_6
      },
    ],
    actions: [
      {
        "key": "assign_agent",
        "name": "Atribuir a um agente",
        "attributeI18nKey": "ASSIGN_AGENT"
      },
      {
        "key": "assign_team",
        "name": "Atribuir a uma equipe",
        "attributeI18nKey": "ASSIGN_TEAM"
      },
      {
        "key": "add_label",
        "name": "Adicionar uma etiqueta",
        "attributeI18nKey": "ADD_LABEL"
      },
      {
        "key": "send_email_to_team",
        "name": "Enviar um email para a equipe",
        "attributeI18nKey": "SEND_EMAIL_TO_TEAM"
      },
      {
        "key": "send_message",
        "name": "Enviar uma mensagem",
        "attributeI18nKey": "SEND_MESSAGE"
      },
      {
        "key": "send_email_transcript",
        "name": "Enviar uma transcrição por email",
        "attributeI18nKey": "SEND_EMAIL_TRANSCRIPT"
      },
      {
        "key": "mute_conversation",
        "name": "Silenciar conversa",
        "attributeI18nKey": "MUTE_CONVERSATION"
      },
      {
        "key": "snooze_conversation",
        "name": "Suspender conversa",
        "attributeI18nKey": "MUTE_CONVERSATION"
      },
      {
        "key": "resolve_conversation",
        "name": "Resolver conversa",
        "attributeI18nKey": "RESOLVE_CONVERSATION"
      },
      {
        "key": "send_webhook_event",
        "name": "Enviar um Evento Webhook",
        "attributeI18nKey": "SEND_WEBHOOK_EVENT"
      },
      {
        "key": "send_attachment",
        "name": "Enviar um Anexo",
        "attributeI18nKey": "SEND_ATTACHMENT"
      },
    ],
  },
  conversation_created: {
    conditions: [
      {
          "key": "status",
          "name": "Estado",
          "attributeI18nKey": "STATUS",
          "inputType": "multi_select",
          "filterOperators": OPERATOR_TYPES_1
        },
        {
          "key": "browser_language",
          "name": "Idioma do Navegador",
          "attributeI18nKey": "BROWSER_LANGUAGE",
          "inputType": "search_select",
          "filterOperators": OPERATOR_TYPES_1
        },
        {
          "key": "mail_subject",
          "name": "Assunto do Email",
          "attributeI18nKey": "MAIL_SUBJECT",
          "inputType": "plain_text",
          "filterOperators": OPERATOR_TYPES_2
        },
        {
          "key": "country_code",
          "name": "País",
          "attributeI18nKey": "COUNTRY_NAME",
          "inputType": "search_select",
          "filterOperators": OPERATOR_TYPES_1
        },
        {
          "key": "phone_number",
          "name": "Número de Telefone",
          "attributeI18nKey": "PHONE_NUMBER",
          "inputType": "plain_text",
          "filterOperators": OPERATOR_TYPES_6
        },
        {
          "key": "referer",
          "name": "Link de Referência",
          "attributeI18nKey": "REFERER_LINK",
          "inputType": "plain_text",
          "filterOperators": OPERATOR_TYPES_2
        },
        {
          "key": "email",
          "name": "Email",
          "attributeI18nKey": "EMAIL",
          "inputType": "plain_text",
          "filterOperators": OPERATOR_TYPES_2
        },
        {
          "key": "inbox_id",
          "name": "Caixa de Entrada",
          "attributeI18nKey": "INBOX",
          "inputType": "multi_select",
          "filterOperators": OPERATOR_TYPES_1
        },
        {
          "key": "conversation_language",
          "name": "Idioma da Conversa",
          "attributeI18nKey": "CONVERSATION_LANGUAGE",
          "inputType": "multi_select",
          "filterOperators": OPERATOR_TYPES_1
        },
        {
          "key": "priority",
          "name": "Prioridade",
          "attributeI18nKey": "PRIORITY",
          "inputType": "multi_select",
          "filterOperators": OPERATOR_TYPES_1
      },
    ],
    actions: [
      {
        "key": "assign_agent",
        "name": "Atribuir a um agente",
        "attributeI18nKey": "ASSIGN_AGENT"
      },
      {
        "key": "assign_team",
        "name": "Atribuir a uma equipe",
        "attributeI18nKey": "ASSIGN_TEAM"
      },
      {
        "key": "assign_agent",
        "name": "Atribuir um agente",
        "attributeI18nKey": "ASSIGN_AGENT"
      },
      {
        "key": "send_email_to_team",
        "name": "Enviar um email para a equipe",
        "attributeI18nKey": "SEND_EMAIL_TO_TEAM"
      },
      {
        "key": "send_message",
        "name": "Enviar uma mensagem",
        "attributeI18nKey": "SEND_MESSAGE"
      },
      {
        "key": "send_email_transcript",
        "name": "Enviar transcrição por email",
        "attributeI18nKey": "SEND_EMAIL_TRANSCRIPT"
      },
      {
        "key": "mute_conversation",
        "name": "Silenciar conversa",
        "attributeI18nKey": "MUTE_CONVERSATION"
      },
      {
        "key": "snooze_conversation",
        "name": "Suspender conversa",
        "attributeI18nKey": "MUTE_CONVERSATION"
      },
      {
        "key": "resolve_conversation",
        "name": "Resolver conversa",
        "attributeI18nKey": "RESOLVE_CONVERSATION"
      },
      {
        "key": "send_webhook_event",
        "name": "Enviar Evento Webhook",
        "attributeI18nKey": "SEND_WEBHOOK_EVENT"
      },
      {
        "key": "send_attachment",
        "name": "Enviar Anexo",
        "attributeI18nKey": "SEND_ATTACHMENT"
      },
    ],
  },
  conversation_updated: {
    conditions: [
      {
        key: 'status',
        name: 'Status',
        attributeI18nKey: 'STATUS',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'browser_language',
        name: 'Idioma do Navegador',
        attributeI18nKey: 'BROWSER_LANGUAGE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'mail_subject',
        name: 'Assunto do E-mail',
        attributeI18nKey: 'MAIL_SUBJECT',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'country_code',
        name: 'País',
        attributeI18nKey: 'COUNTRY_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'referer',
        name: 'Link de Referência',
        attributeI18nKey: 'REFERER_LINK',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'phone_number',
        name: 'Número de Telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
      {
        key: 'assignee_id',
        name: 'Responsável',
        attributeI18nKey: 'ASSIGNEE_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'team_id',
        name: 'Equipe',
        attributeI18nKey: 'TEAM_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'email',
        name: 'E-mail',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de Entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Idioma da Conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'priority',
        name: 'Prioridade',
        attributeI18nKey: 'PRIORITY',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir a um agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir a uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'assign_agent',
        name: 'Atribuir a um agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'send_email_to_team',
        name: 'Enviar um e-mail para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Enviar uma mensagem',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Enviar transcrição por e-mail',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Suspender conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'resolve_conversation',
        name: 'Resolver conversa',
        attributeI18nKey: 'RESOLVE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar Evento Webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Enviar Anexo',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
  conversation_opened: {
    conditions: [
      {
        key: 'browser_language',
        name: 'Idioma do Navegador',
        attributeI18nKey: 'BROWSER_LANGUAGE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'email',
        name: 'E-mail',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'mail_subject',
        name: 'Assunto do E-mail',
        attributeI18nKey: 'MAIL_SUBJECT',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'country_code',
        name: 'País',
        attributeI18nKey: 'COUNTRY_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'referer',
        name: 'Link de Referência',
        attributeI18nKey: 'REFERER_LINK',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'assignee_id',
        name: 'Responsável',
        attributeI18nKey: 'ASSIGNEE_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'phone_number',
        name: 'Número de Telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
      {
        key: 'team_id',
        name: 'Equipe',
        attributeI18nKey: 'TEAM_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de Entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Idioma da Conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'priority',
        name: 'Prioridade',
        attributeI18nKey: 'PRIORITY',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir a um agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir a uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'assign_agent',
        name: 'Atribuir a um agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'send_email_to_team',
        name: 'Enviar um email para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Enviar uma mensagem',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Enviar uma transcrição por email',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Suspender conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar Evento Webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Enviar Anexo',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
};

export const AUTOMATION_RULE_EVENTS = [
  {
    key: 'conversation_created',
    value: 'Conversa Criada',
  },
  {
    key: 'conversation_updated',
    value: 'Conversa Atualizada',
  },
  {
    key: 'message_created',
    value: 'Mensagem Criada',
  },
  {
    key: 'conversation_opened',
    value: 'Conversa Aberta',
  },
];

export const AUTOMATION_ACTION_TYPES = [
  {
    key: 'assign_agent',
    label: 'Atribuir a um agente',
    inputType: 'search_select',
  },
  {
    key: 'assign_team',
    label: 'Atribuir a uma equipe',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Adicionar uma etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'send_email_to_team',
    label: 'Enviar um email para a equipe',
    inputType: 'team_message',
  },
  {
    key: 'send_email_transcript',
    label: 'Enviar uma transcrição por email',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Silenciar conversa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Suspender conversa',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Resolver conversa',
    inputType: null,
  },
  {
    key: 'send_webhook_event',
    label: 'Enviar Evento Webhook',
    inputType: 'url',
  },
  {
    key: 'send_attachment',
    label: 'Enviar Anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar uma mensagem',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Alterar Prioridade',
    inputType: 'search_select',
  },
];
