import type { IntegrationDefinitionProps } from '@botpress/sdk'
import { z } from 'zod'

export const channels = {
  ticket: {
    title: 'Zendesk Ticket',
    messages: {
      text: {
        schema: z.object({
          text: z.string(),
        }),
      },
    },
    message: {
      tags: {
        id: {},
      },
    },
    conversation: {
      tags: {
        id: {
          title: 'Zendesk Ticket ID',
        },
        requesterId: {
          title: 'Zendesk Requester ID',
        },
      },
      creation: { enabled: true, requiredTags: ['id'] },
    },
  },
} satisfies IntegrationDefinitionProps['channels']
