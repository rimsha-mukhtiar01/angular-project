import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectionPositionPair
} from "./chunk-CRNMEX7S.js";
import {
  takeUntilDestroyed
} from "./chunk-BUXQEYVL.js";
import {
  ANIMATION_MODULE_TYPE,
  Directive,
  ElementRef,
  Input,
  NgModule,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-FODTFWCT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ZY5HDIHX.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-no-animation.mjs
var NzNoAnimationDirective = class _NzNoAnimationDirective {
  animationType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  nzNoAnimation = false;
  static ɵfac = function NzNoAnimationDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzNoAnimationDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzNoAnimationDirective,
    selectors: [["", "nzNoAnimation", ""]],
    hostVars: 2,
    hostBindings: function NzNoAnimationDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("nz-animate-disabled", ctx.nzNoAnimation || ctx.animationType === "NoopAnimations");
      }
    },
    inputs: {
      nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute]
    },
    exportAs: ["nzNoAnimation"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[nzNoAnimation]",
      exportAs: "nzNoAnimation",
      host: {
        "[class.nz-animate-disabled]": `nzNoAnimation || animationType === 'NoopAnimations'`
      }
    }]
  }], null, {
    nzNoAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzNoAnimationModule = class _NzNoAnimationModule {
  static ɵfac = function NzNoAnimationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzNoAnimationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzNoAnimationModule,
    imports: [NzNoAnimationDirective],
    exports: [NzNoAnimationDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNoAnimationDirective],
      exports: [NzNoAnimationDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-overlay.mjs
var POSITION_MAP = {
  top: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }),
  right: new ConnectionPositionPair({
    originX: "end",
    originY: "center"
  }, {
    overlayX: "start",
    overlayY: "center"
  }),
  rightTop: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  rightBottom: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  bottom: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  left: new ConnectionPositionPair({
    originX: "start",
    originY: "center"
  }, {
    overlayX: "end",
    overlayY: "center"
  }),
  leftTop: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  leftBottom: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  })
};
var positionOffsetMapFactory = (offset = 12) => ({
  top: [0, -offset],
  topCenter: [0, -offset],
  topLeft: [0, -offset],
  topRight: [0, -offset],
  right: [offset, 0],
  rightTop: [offset, 0],
  rightBottom: [offset, 0],
  bottom: [0, offset],
  bottomCenter: [0, offset],
  bottomLeft: [0, offset],
  bottomRight: [0, offset],
  left: [-offset, 0],
  leftTop: [-offset, 0],
  leftBottom: [-offset, 0]
});
var TOOLTIP_OFFSET_MAP = positionOffsetMapFactory();
var DEFAULT_TOOLTIP_POSITIONS = [setConnectedPositionOffset(POSITION_MAP.top, TOOLTIP_OFFSET_MAP.top), setConnectedPositionOffset(POSITION_MAP.right, TOOLTIP_OFFSET_MAP.right), setConnectedPositionOffset(POSITION_MAP.bottom, TOOLTIP_OFFSET_MAP.bottom), setConnectedPositionOffset(POSITION_MAP.left, TOOLTIP_OFFSET_MAP.left)];
var DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight];
var DEFAULT_MENTION_TOP_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "bottom"
})];
var DEFAULT_MENTION_BOTTOM_POSITIONS = [POSITION_MAP.bottomLeft, new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "top"
})];
function getPlacementName(position) {
  for (const placement in POSITION_MAP) {
    if (position.connectionPair.originX === POSITION_MAP[placement].originX && position.connectionPair.originY === POSITION_MAP[placement].originY && position.connectionPair.overlayX === POSITION_MAP[placement].overlayX && position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) {
      return placement;
    }
  }
  return void 0;
}
var DATE_PICKER_POSITION_MAP = {
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }, void 0, 2),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }, void 0, -2),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }, void 0, 2),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }, void 0, -2)
};
var DEFAULT_DATE_PICKER_POSITIONS = [DATE_PICKER_POSITION_MAP.bottomLeft, DATE_PICKER_POSITION_MAP.topLeft, DATE_PICKER_POSITION_MAP.bottomRight, DATE_PICKER_POSITION_MAP.topRight];
function normalizeConnectedPositionOffset(offset) {
  return Array.isArray(offset) ? offset : [offset, offset];
}
function setConnectedPositionOffset(position, offset) {
  const [offsetX, offsetY] = normalizeConnectedPositionOffset(offset);
  return __spreadProps(__spreadValues({}, position), {
    offsetX,
    offsetY
  });
}
var NzConnectedOverlayDirective = class _NzConnectedOverlayDirective {
  cdkConnectedOverlay = inject(CdkConnectedOverlay);
  nzArrowPointAtCenter = false;
  constructor() {
    this.cdkConnectedOverlay.backdropClass = "nz-overlay-transparent-backdrop";
    this.cdkConnectedOverlay.positionChange.pipe(takeUntilDestroyed()).subscribe((position) => {
      if (this.nzArrowPointAtCenter) {
        this.updateArrowPosition(position);
      }
    });
  }
  updateArrowPosition(position) {
    const originRect = this.getOriginRect();
    const placement = getPlacementName(position);
    let offsetX = 0;
    let offsetY = 0;
    if (placement === "topLeft" || placement === "bottomLeft") {
      offsetX = originRect.width / 2 - 14;
    } else if (placement === "topRight" || placement === "bottomRight") {
      offsetX = -(originRect.width / 2 - 14);
    } else if (placement === "leftTop" || placement === "rightTop") {
      offsetY = originRect.height / 2 - 10;
    } else if (placement === "leftBottom" || placement === "rightBottom") {
      offsetY = -(originRect.height / 2 - 10);
    }
    if (this.cdkConnectedOverlay.offsetX !== offsetX || this.cdkConnectedOverlay.offsetY !== offsetY) {
      this.cdkConnectedOverlay.offsetY = offsetY;
      this.cdkConnectedOverlay.offsetX = offsetX;
      this.cdkConnectedOverlay.overlayRef.updatePosition();
    }
  }
  getFlexibleConnectedPositionStrategyOrigin() {
    if (this.cdkConnectedOverlay.origin instanceof CdkOverlayOrigin) {
      return this.cdkConnectedOverlay.origin.elementRef;
    } else {
      return this.cdkConnectedOverlay.origin;
    }
  }
  getOriginRect() {
    const origin = this.getFlexibleConnectedPositionStrategyOrigin();
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
  static ɵfac = function NzConnectedOverlayDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzConnectedOverlayDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzConnectedOverlayDirective,
    selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]],
    inputs: {
      nzArrowPointAtCenter: [2, "nzArrowPointAtCenter", "nzArrowPointAtCenter", booleanAttribute]
    },
    exportAs: ["nzConnectedOverlay"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzConnectedOverlayDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkConnectedOverlay][nzConnectedOverlay]",
      exportAs: "nzConnectedOverlay"
    }]
  }], () => [], {
    nzArrowPointAtCenter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzOverlayModule = class _NzOverlayModule {
  static ɵfac = function NzOverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOverlayModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzOverlayModule,
    imports: [NzConnectedOverlayDirective],
    exports: [NzConnectedOverlayDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOverlayModule, [{
    type: NgModule,
    args: [{
      imports: [NzConnectedOverlayDirective],
      exports: [NzConnectedOverlayDirective]
    }]
  }], null, null);
})();

export {
  NzNoAnimationDirective,
  POSITION_MAP,
  TOOLTIP_OFFSET_MAP,
  DEFAULT_TOOLTIP_POSITIONS,
  getPlacementName,
  setConnectedPositionOffset,
  NzConnectedOverlayDirective,
  NzOverlayModule
};
//# sourceMappingURL=chunk-2DD26VEX.js.map
