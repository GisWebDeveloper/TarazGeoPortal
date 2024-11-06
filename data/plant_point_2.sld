<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
                       xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
                       xmlns="http://www.opengis.net/sld" 
                       xmlns:ogc="http://www.opengis.net/ogc" 
                       xmlns:xlink="http://www.w3.org/1999/xlink" 
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>Attribute-based point</Name>
    <UserStyle>
      <Title>Taraz Plant</Title>
      <FeatureTypeStyle>
        <Rule>          
          <Name>Plant</Name>
          <Title>class_id110
            <Localized lang="en">Лиственные деревья (Здоровое)</Localized>
            <Localized lang="it">Жапырақты ағаш (Сау өсімдік)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>110</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id110.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id120
            <Localized lang="en">Лиственные деревья (Удовлетворительное, требуется обрезка)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қанағаттанарлық, кесу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>120</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id120.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id130
            <Localized lang="en">Лиственные деревья (Удовлетворительное, требуется лечение)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қанағаттанарлық, емдеу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id130.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id140
            <Localized lang="en">Лиственные деревья (Погибшее)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қураған)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>140</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id140.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id210
            <Localized lang="en">Лиственные кустарники (Здоровое)</Localized>
            <Localized lang="it">Жапырақты бұта (Сау өсімдік)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>210</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>   
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id210.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id220
            <Localized lang="en">Лиственные кустарники (Удовлетворительное, требуется обрезка)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қанағаттанарлық, кесу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>220</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id220.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id230
            <Localized lang="en">Лиственные кустарники (Удовлетворительное, требуется лечение)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қанағаттанарлық, емдеу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>230</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id230.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id240
            <Localized lang="en">Лиственные кустарники (Погибшее)</Localized>
            <Localized lang="it">Жапырақты ағаш (Қураған)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>240</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id240.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>          
          <Name>Plant</Name>
          <Title>class_id310
            <Localized lang="en">Хвойные деревья (Здоровое)</Localized>
            <Localized lang="it">Қылқанды ағаш (Сау өсімдік)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>310</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id310.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id320
            <Localized lang="en">Хвойные деревья (Удовлетворительное, требуется обрезка)</Localized>
            <Localized lang="it">Қылқанды ағаш (Қанағаттанарлық, кесу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>320</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id320.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id330
            <Localized lang="en">Хвойные деревья (Удовлетворительное, требуется лечение)</Localized>
            <Localized lang="it">Қылқанды ағаш (Қанағаттанарлық, емдеу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>330</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id330.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id340
            <Localized lang="en">Хвойные деревья (Погибшее)</Localized>
            <Localized lang="it">Қылқанды ағаш (Қураған)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>340</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id340.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id410
            <Localized lang="en">Хвойные кустарники (Здоровое)</Localized>
            <Localized lang="it">Қылқанды бұта (Сау өсімдік)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>410</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id410.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id420
            <Localized lang="en">Хвойные кустарники (Удовлетворительное, требуется обрезка)</Localized>
            <Localized lang="it">Қылқанды бұта (Қанағаттанарлық, кесу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>420</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id420.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id430
            <Localized lang="en">Хвойные кустарники (Удовлетворительное, требуется лечение)</Localized>
            <Localized lang="it">Қылқанды бұта (Қанағаттанарлық, емдеу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>430</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id430.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id440
            <Localized lang="en">Хвойные кустарники (Погибшее)</Localized>
            <Localized lang="it">Қылқанды бұта (Қураған)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>440</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id440.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>          
          <Title>class_id510
            <Localized lang="en">Живая изгородь (Здоровое)</Localized>
            <Localized lang="it">Тірі бұталы қоршау (Сау өсімдік)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>510</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id510.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id520
            <Localized lang="en">Живая изгородь (Удовлетворительное, требуется обрезка)</Localized>
            <Localized lang="it">Тірі бұталы қоршау (Қанағаттанарлық, кесу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>520</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>          
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id520.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id530
            <Localized lang="en">Живая изгородь (Удовлетворительное, требуется лечение)</Localized>
            <Localized lang="it">Тірі бұталы қоршау (Қанағаттанарлық, емдеу қажет)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>530</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id530.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Plant</Name>
          <Title>class_id540
            <Localized lang="en">Живая изгородь (Погибшее)</Localized>
            <Localized lang="it">Тірі бұталы қоршау (Қураған)</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>class_id</ogc:PropertyName>
              <ogc:Literal>540</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>80000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource
                                xlink:type="simple"
                                xlink:href="/styles/plant/class_id540.svg" />
                <Format>image/svg+xml</Format>
              </ExternalGraphic>
              <Size>22</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
