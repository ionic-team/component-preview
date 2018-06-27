## Modal

Modals slide in and off screen to display a temporary UI. Modals are often used for login or signup pages, message composition,and option selection.

```typescript
const modal = await this.modalCtrl.create({
  component: 'modal-page'
});

modal.present();
```