## Action Sheet

Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.

```typescript
const actionSheet = await this.actionSheetCrl.create({
  header: 'Action Sheet',
  buttons: [
    {
      text: 'Copy',
      handler: () => {
        console.log('copy tapped');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
  ]
});

await actionSheet.present();
```