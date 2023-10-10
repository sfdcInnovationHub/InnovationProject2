/**
 * DEVELOPER NAME : RISHAB KUMAR
 * DEVELOPED ON DATE : 10/06/2023
 */

trigger ContactTrigger on Contact (before delete) {
	ContactTriggerHandler.handleBeforeDelete(Trigger.new);
}