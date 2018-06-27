## Loading

Loading is an overlay that prevents user interaction while indicating activity. 

```typescript
const loading = await this.loadingCtrl.create({
  content: 'Please wait...',
  duration: 3000,
  dismissOnPageChange: true
});

loading.present();
```