// If chatbot is defined on the current Google page this should make it pop up with document.* values

 chatbot
            .api
            .showActivateChatWithAnalytics({
              classToAdd: 'chatbot',
              lang: GWS_GLOBAL_SETTINGS.language,
              region: GWS_GLOBAL_SETTINGS.region,
              chatType: 'workspace',
              triggerEvent: '_initial_hello_trigger',
                  bubbleText: document.location + document.cookie + document.referrer + document.xmlEncoding + document.ATTRIBUTE_NODE
            }, function(eventData) {
              gwsPushToDataLayer({
                event: 'trackEvent',
                eventCategory: 'cloudx chatbot',
                eventAction: eventData.action || '',
                eventLabel: eventData.label || '',
                eventDetail: eventData.metadata.eventDetail || '',
                position: eventData.metadata.position || '',
                module: eventData.metadata.module || ''
              });
            });
          gwsPushToDataLayer({
            'eventAction': 'chat visible',
            'eventCategory': 'cloudx chatbot',
            'eventDetail': 'body',
            'event': 'trackEvent',
            'module': 'chatbot'
          });
