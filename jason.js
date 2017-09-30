
function openFile()
{
   media = theme.opendialog('FILE_OPEN','FILES_ALLMEDIA');
   if (media)
   {
      player.URL = media;
      player.controls.play();
   }
}
