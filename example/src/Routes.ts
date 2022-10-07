export type Routes = {
  PermissionsPage: undefined;
  CameraPage: undefined;
  ScannerOrPicture:undefined;
  MediaPage: {
    path: string;
    type: 'video' | 'photo';
  };
};
