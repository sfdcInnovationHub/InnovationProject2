public virtual class TriggerHandler {
    public void run() {
        // Dispatch to the correct handler method based on the trigger context
        if (Trigger.isBefore) {
            if (Trigger.isInsert) {
                this.beforeInsert((List<SObject>) Trigger.new);
            } else if (Trigger.isUpdate) {
                this.beforeUpdate((List<SObject>) Trigger.new, (Map<Id, SObject>) Trigger.oldMap);
            } else if (Trigger.isDelete) {
                this.beforeDelete((List<SObject>) Trigger.old);
            }
        } else if (Trigger.isAfter) {
            if (Trigger.isInsert) {
                this.afterInsert((List<SObject>) Trigger.new);
            } else if (Trigger.isUpdate) {
                this.afterUpdate((List<SObject>) Trigger.new, (Map<Id, SObject>) Trigger.oldMap);
            } else if (Trigger.isDelete) {
                this.afterDelete((List<SObject>) Trigger.old);
            } else if (Trigger.isUndelete) {
                this.afterUndelete((List<SObject>) Trigger.new);
            }
        }
    }

    // Context-specific methods for override
    public virtual void beforeInsert(List<SObject> newItems) {}
    public virtual void beforeUpdate(List<SObject> newItems, Map<Id, SObject> oldItemsMap) {}
    public virtual void beforeDelete(List<SObject> oldItems) {}
    public virtual void afterInsert(List<SObject> newItems) {}
    public virtual void afterUpdate(List<SObject> newItems, Map<Id, SObject> oldItemsMap) {}
    public virtual void afterDelete(List<SObject> oldItems) {}
    public virtual void afterUndelete(List<SObject> newItems) {}

    // Utility exception class
    public class TriggerHandlerException extends Exception {}
}