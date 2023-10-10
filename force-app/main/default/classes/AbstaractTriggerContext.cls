global abstract class AbstaractTriggerContext {
    global static void run(String objectName, System.TriggerOperation operationType, List<sobject> newList,
                           List<sobject> oldList, Map<Id, sobject> newMap, Map<Id, sobject> oldMap){
          for(TriggerContext__mdt record : getMetaData(objectName,operationType)){
             AbstaractTriggerContext instance = (AbstaractTriggerContext)Type.forName(record.ClassName__c).newInstance();
              if(operationType == system.TriggerOperation.BEFORE_INSERT){
                  instance.beforeInsert(newList,oldList,newMap,oldMap);
              }else if(operationType == system.TriggerOperation.BEFORE_UPDATE){
                  instance.beforeUpdate(newList,oldList,newMap,oldMap);
              }else if(operationType == system.TriggerOperation.BEFORE_DELETE){
                  instance.beforeDelete(oldList,oldMap);
              }else if(operationType == system.TriggerOperation.AFTER_INSERT){
                  instance.afterInsert(newList,oldList,newMap,oldMap);
              }else if(operationType == system.TriggerOperation.AFTER_UPDATE){
                  instance.afterUpdate(newList,oldList,newMap,oldMap);
              }else if(operationType == system.TriggerOperation.AFTER_UNDELETE){
                  instance.afterUndelete(newList,newMap);
              }
          }
    }
    global virtual void beforeInsert(List<sobject> newList,List<sobject> oldList,Map<Id,sobject> newMap,Map<Id,sobject> oldMap){
        for(sobject record : newList){
            //if(String.isBlank((String)record.get()));
        }
    }
    global virtual void beforeUpdate(List<sobject> newList,List<sobject> oldList,Map<Id,sobject> newMap,Map<Id,sobject> oldMap){
        
    }
    global virtual void afterInsert(List<sobject> newList,List<sobject> oldList,Map<Id,sobject> newMap,Map<Id,sobject> oldMap){
        
    }
    global virtual void afterUpdate(List<sobject> newList,List<sobject> oldList,Map<Id,sobject> newMap,Map<Id,sobject> oldMap){
        
    }
    global virtual void beforeDelete(List<sobject> oldList,Map<Id,sobject> oldMap){
        
    }
    global virtual void afterUndelete(List<sobject> newList,Map<Id,sobject> newMap){
        
    }
    global static List<TriggerContext__mdt> getMetaData(String objectName, System.TriggerOperation operationType){
        string query = 'Select Class_Name__c from TriggerContext_mdt where Class_Name__c != null And Is_Active__c = True'+
            'And Object_Name__c =:objectName';
        string context ='';
        if(operationType == System.TriggerOperation.BEFORE_INSERT){
            context = 'AND Context__c=\'Before\'AND Operation__c=\'Insert\'';
        }else if(operationType == System.TriggerOperation.BEFORE_UPDATE){
            context = 'AND Context__c=\'Before\'AND Operation__c=\'Update\'';
        }else if(operationType == System.TriggerOperation.BEFORE_DELETE){
            context = 'ANd Context__c=\'Before\'AND Operation__c=\'Delete\'';
        }else if(operationType == System.TriggerOperation.AFTER_INSERT){
            context = 'AND Context__c=\'After\'AND Operation__c=\'Insert\'';
        }else if(operationType == System.TriggerOperation.AFTER_UPDATE){
            context = 'AND Context__c=\'After\'AND Operation__c=\'Update\'';
        }else if(operationType == System.TriggerOperation.AFTER_UNDELETE){
            context = 'AND Context__c=\'After\'AND Operation__c=\'UnDelete\'';
        }
        query +=context;
        return (List<TriggerContext__mdt>)Database.query(query) ;
    }
}