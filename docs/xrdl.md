# Extended Reality Definition Language

## Table of Contents
1. [Introduction](#introduction)  
2. [Extension to HTML](#extension-to-html)  
3. [Extension to CSS](#extension-to-html)  
4. [Extension to the Document Object Model](#extension-to-the-document-object-model)  

## Introduction

## Extension to HTML

### Elements

#### The `transform` element

##### Usage

The `transform` element represents a point in space. 

##### Dom interface
```
[Exposed=Window]
interface Transform : HTMLElement {
  [HTMLConstructor] constructor();

  [CEReactions] attribute DOMPoint position;
  [CEReactions] attribute DOMPoint rotation;
};
```

#### The `primitive` 

##### Usage

The `primitive` element represents a 3d primitive.

##### Dom interface
```
[Exposed=Window]
interface Primitive : Transform {
  [HTMLConstructor] constructor();

  [CEReactions] attribute DOMString src;
  [CEReactions] attribute DOMString data;
};
```

#### The `model` element

##### Usage

The `model` element represents a 3D model.

##### Dom interface
```
[Exposed=Window]
interface Model : Primitive {
  [HTMLConstructor] constructor();

  [CEReactions] attribute DOMString src;
  [CEReactions] attribute sequence<DOMAnimation> animations;
};
```

#### The `panel` element

##### Usage

The `panel` element represents a flat plane on which HTML content can be displayed and interacted with.

##### Dom interface
```
[Exposed=Window]
interface Panel : Transform {
  [HTMLConstructor] constructor();
};
```

#### The `camera` element

##### Usage

The `camera` element represents a view.

##### Dom interface
```
[Exposed=Window]
interface Camera : Transform {
  [HTMLConstructor] constructor();

  [CEReactions] attribute DOMPoint lookAt;
};
```

## Extension to CSS

## Extension to the Document Object Model