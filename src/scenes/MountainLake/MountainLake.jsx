import './MountainLake.scss'

const MountainLake = () => {
  return (
    <>
      <div class="scene">
        <div class="sky"></div>
        <div class="lake"></div>
        <div class="beach"></div>
        <div class="beach beach--reflection"></div>
        <div class="mountain"></div>
        <div class="mountain mountain--reflection"></div>

        <div class="trees">
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
        </div>

        <div class="trees trees--reflection">
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
          <div class="tree">
            <div class="tree__branches"></div>
            <div class="tree__trunk"></div>
          </div>
        </div>

        <div class="boat-wrapper">
          <div class="boat">
            <div class="boat__hull"></div>
            <div class="boat__mast"></div>
            <div class="boat__sail"></div>
            <div class="boat__jib"></div>
          </div>
          <div class="boat boat--reflection">
            <div class="boat__hull"></div>
            <div class="boat__mast"></div>
            <div class="boat__sail"></div>
            <div class="boat__jib"></div>
          </div>
        </div>

        <div class="bird">
          <div class="bird__wing bird__wing--left"></div>
          <div class="bird__wing bird__wing--right"></div>
        </div>
        <div class="bird bird--reflection">
          <div class="bird__wing bird__wing--left"></div>
          <div class="bird__wing bird__wing--right"></div>
        </div>

        <div class="bird bird--offset">
          <div class="bird__wing bird__wing--left"></div>
          <div class="bird__wing bird__wing--right"></div>
        </div>
        <div class="bird bird--offset bird--reflection">
          <div class="bird__wing bird__wing--left"></div>
          <div class="bird__wing bird__wing--right"></div>
        </div>

        <div class="sun"></div>
        <div class="sun sun--reflection"></div>
        <div class="lake"></div>
      </div>
    </>
  )
}

export default MountainLake
