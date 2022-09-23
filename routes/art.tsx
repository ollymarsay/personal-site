import ComingSoon from "../components/ComingSoon.tsx";
import HelloBar from "../components/HelloBar.tsx";

export default function Art(){
    return (
        <div class="flex flex-col min-h-screen">
        <HelloBar />
        {
          <div class="flex-1">
            <ComingSoon />
          </div>
        }
      </div>
    )
}