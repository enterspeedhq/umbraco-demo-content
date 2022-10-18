using System;
using Umbraco.Cms.Core.Packaging;

namespace Enterspeed.Demos.UmbracoCms.V10.MultisiteBeers.Migrations;

public class CustomPackageMigrationPlan : PackageMigrationPlan
{
    public CustomPackageMigrationPlan() : base("Enterspeed multisite beers tutorial content")
    {
    }

    protected override void DefinePlan()
    {
        To<Migration202210171606InitialPackageContent>(new Guid("4FD681BE-E27E-4688-922B-29EDCDCB8A49"));
    }
}