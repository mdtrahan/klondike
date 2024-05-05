function CCreditsPanel(){
    
    var _oPanel;
    var _oPanelContainer;
    var _oButExit;
    var _oLogo;
    var _oListener;
    
    this._init = function(){
        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oPanel = createBitmap(oSprite);        
        _oPanel.regX = oSprite.width/2;
        _oPanel.regY = oSprite.height/2;
        _oListener = _oPanel.on("click",this._onLogoButRelease);
        _oPanelContainer.addChild(_oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT/2;  


        var oLink = new createjs.Text("www.codethislab.com"," 34px "+PRIMARY_FONT, "#ffffff");
        oLink.y = 190;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 600;
        _oPanelContainer.addChild(oLink);
        
        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        _oLogo = createBitmap(oSprite);
        _oLogo.y = -50
        _oLogo.regX = oSprite.width/2;
        _oLogo.regY = oSprite.height/2;
        _oPanelContainer.addChild(_oLogo);
      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(314, -186, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
    };
    
    this.unload = function(){
        
        _oButExit.setClickable(false);
        
        s_oStage.removeChild(_oPanelContainer);
        
        _oButExit.unload();

        
        _oPanel.off("click",_oListener);
        
        
    };
    
    this._onLogoButRelease = function(){
        window.open("https://www.codethislab.com/","_blank");
    };
    
    this._init();
    
    
};


