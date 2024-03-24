import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
    const [removeAlbum , results] = useRemoveAlbumMutation();

    const hanldeRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (
    <> 
        <Button className="mr-2" loading={results.isLoading} onClick={hanldeRemoveAlbum}>
              <GoTrashcan />
        </Button>
        {album.title} 
    </>
  );

    return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
    );
}

export default AlbumsListItem;